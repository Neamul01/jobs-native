import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Facebook from "expo-auth-session/providers/facebook"; // Use * to import all from Facebook
import { SafeAreaView } from "react-native-safe-area-context";

const AuthScreen = () => {
  const [user, setUser] = useState();
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "321370610537862",
  });

  useEffect(() => {
    if (response && response.type === "success" && response.authentication) {
      const fetchUserInfo = async () => {
        // Removed the async IIFE
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        setUser(userInfo);
        console.log(userInfo);
      };

      fetchUserInfo(); // Call the fetchUserInfo function
    }
  }, [response]);

  const handlePressAsync = async () => {
    const result = await promptAsync();
    if (result.type !== "success") {
      alert("Something went wrong");
      return;
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>AuthScreen</Text>
        {user ? (
          <Profile user={user} /> // Pass the user data to the Profile component
        ) : (
          <Button
            disabled={!request}
            title="Sign in with Facebook"
            onPress={handlePressAsync}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

function Profile({ user }) {
  return (
    <View>
      <Image
        source={{ uri: user.picture.data.url }}
        style={{ height: 200, width: 200 }}
      />
      <Text>{user.name}</Text>
      <Text>ID: {user.id}</Text>
    </View>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({});

// https://com.anonymous.jobs/expo-development-client/?url=http%3A%2F%2F192.168.195.147%3A8081
