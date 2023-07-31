import React,{useState,useLayoutEffect,useEffect} from "react";
import { View, Text, Pressable, SafeAreaView, FlatList ,StyleSheet, TouchableOpacity} from "react-native";
// import { Feather } from "@expo/vector-icons";
// import { socketIO } from "../../../server";
// import ChatComponent from "../../component/ChatComponent/ChatComponent";
import ChatComponent from "../../Components/ChatComponent/ChatComponent";
import socket from "../../../socket";
// import { styles } from "../utils/styles";
import Modal from "../../Components/Modal/Modal";
import CustomTouchableOpacity from "../../Components/Button/Button";
const Chat = () => {
    const [visible, setVisible] = useState(false);
    const [rooms, setRooms] = useState([]);
    
    useLayoutEffect(() => {
        function fetchGroups() {
            fetch("http://localhost:4000/api")
                .then((res) => res.json())
                .then((data) => setRooms(data))
                .catch((err) => console.error(err<"err hain bro"));
        }
        fetchGroups();
    }, []);
    
    //👇🏻 Runs whenever there is new trigger from the backend
    useEffect(() => {
		socket.on("roomsList", (rooms) => {
            console.log(rooms,"rooms")
			setRooms(rooms);
		});
	}, [socket]);

	const handleCreateGroup = () => {
        console.log("clicked")
        setVisible(true);
    }

    
   
    return (
        <SafeAreaView style={styles.chatscreen}>
            <View style={styles.chattopContainer}>
                <View style={styles.chatheader}>
                    <Text style={styles.chatheading}>Potential Match</Text>

            {/* 👇🏻 Logs "ButtonPressed" to the console when the icon is clicked */}
                    {/* <Pressable onPress={() => {handleCreateGroup}}>
                       
                        <Text onPress={() => {handleCreateGroup}}>
                            Create 
                        </Text>
                    </Pressable> */}

                    

                    {/* <CustomTouchableOpacity
            style={{
                backgroundColor: '#6528F7',
                width: '20%',
                alignSelf: 'center',
                fontSize:10
                // marginTop: 20,
                }}
            title="Create"
            onPress={() => {handleCreateGroup}}
        /> */}

        <TouchableOpacity    onPress={() => {handleCreateGroup()}}>
            <Text style={{color:"black"}}>
               Match
            </Text>
        </TouchableOpacity>
                </View>
            </View>

            <View style={styles.chatlistContainer}>
                {rooms.length > 0 ? (
                    <FlatList
                        data={rooms}
                        renderItem={({ item }) => <ChatComponent item={item} />}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <View style={styles.chatemptyContainer}>
                        <Text style={styles.chatemptyText}>No Match Found!</Text>
                        <Text>Click On the room for joining your potential match</Text>
                    </View>
                )}
            </View>
            {visible ? <Modal setVisible={setVisible} /> : ""}
        </SafeAreaView>
    );
};
export const styles = StyleSheet.create({
    loginscreen: {
        flex: 1,
        backgroundColor: "#EEF1FF",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        width: "100%",
    },
    loginheading: {
        fontSize: 26,
        marginBottom: 10,
    },
    logininputContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    logininput: {
        borderWidth: 1,
        width: "90%",
        padding: 8,
        borderRadius: 2,
    },
    loginbutton: {
        backgroundColor: "green",
        padding: 12,
        marginVertical: 10,
        width: "60%",
        borderRadius: "50%",
        elevation: 1,
    },
    loginbuttonText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "600",
    },
    chatscreen: {
        backgroundColor: "#EDE4FF",
        flex: 1,
        padding: 10,
        position: "relative",
    },
    chatheading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#6528F7",
    },
    chattopContainer: {
        backgroundColor: "#F7F7F7",
        height: 70,
        width: "100%",
        padding: 20,
        justifyContent: "center",
        marginBottom: 15,
        elevation: 2,
    },
    chatheader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    chatlistContainer: {
        paddingHorizontal: 10,
    },
    chatemptyContainer: {
        width: "100%",
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
    },
    chatemptyText: { fontWeight: "bold", fontSize: 24, paddingBottom: 30 },
    messagingscreen: {
        flex: 1,
    },
    messaginginputContainer: {
        width: "100%",
        minHeight: 100,
        backgroundColor: "white",
        paddingVertical: 30,
        paddingHorizontal: 15,
        justifyContent: "center",
        flexDirection: "row",
    },
    messaginginput: {
        borderWidth: 1,
        padding: 15,
        flex: 1,
        marginRight: 10,
        borderRadius: 20,
    },
    messagingbuttonContainer: {
        width: "30%",
        backgroundColor: "green",
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },
    modalbutton: {
        width: "40%",
        height: 45,
        backgroundColor: "green",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
    },
    modalbuttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    modaltext: {
        color: "#fff",
    },
    modalContainer: {
        width: "100%",
        borderTopColor: "#ddd",
        borderTopWidth: 1,
        elevation: 1,
        height: 400,
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        zIndex: 10,
        paddingVertical: 50,
        paddingHorizontal: 20,
    },
    modalinput: {
        borderWidth: 2,
        padding: 15,
    },
    modalsubheading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },
    mmessageWrapper: {
        width: "100%",
        alignItems: "flex-start",
        marginBottom: 15,
    },
    mmessage: {
        maxWidth: "50%",
        backgroundColor: "#f5ccc2",
        padding: 15,
        borderRadius: 10,
        marginBottom: 2,
    },
    mvatar: {
        marginRight: 5,
    },
    cchat: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        height: 80,
        marginBottom: 10,
    },
    cavatar: {
        marginRight: 15,
    },
    cusername: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold",
    },
    cmessage: {
        fontSize: 14,
        opacity: 0.7,
    },
    crightContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
    },
    ctime: {
        opacity: 0.5,
    },
});
export default Chat;