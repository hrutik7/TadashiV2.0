import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
// import { listMessages } from './src/graphql/queries';
// import { onCreateMessage } from './src/graphql/subscriptions';
// import { createMessage } from './src/graphql/mutations';
import { listMessages } from '../../../src/graphql/queries';
import { onCreateMessage } from '../../../src/graphql/subscriptions';
import { createMessage } from '../../../src/graphql/mutations';

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages(); // Fetch existing messages
    subscribeToNewMessages(); // Subscribe to real-time message updates
  }, []);

  const fetchMessages = async () => {
    try {
      const messageData = await API.graphql(graphqlOperation(listMessages));
      setMessages(messageData.data.listMessages.items);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const subscribeToNewMessages = async () => {
    const subscription = API.graphql(graphqlOperation(onCreateMessage)).subscribe({
      next: (eventData) => {
        const newMessage = eventData.value.data.onCreateMessage;
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      },
      error: (error) => {
        console.error('Error subscribing to new messages:', error);
      },
    });

    return () => subscription.unsubscribe(); // Cleanup the subscription when component unmounts
  };

  const handleSendMessage = async () => {
    if (!newMessage) return;

    const message = {
      content: newMessage,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      await API.graphql(graphqlOperation(createMessage, { input: message }));
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const renderMessageItem = ({ item }) => (
    <View>
      <Text>{item.content}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
      />
      <View>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
          placeholder="Type your message"
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity onPress={handleSendMessage} style={{ backgroundColor: 'blue', padding: 10 }}>
          <Text style={{ color: 'white' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Message;
