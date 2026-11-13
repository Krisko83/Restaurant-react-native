import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export default function usePersistedState(key, initialValue) {
    const [state ,setState] = useState(initialValue);

    useEffect(() => {
        const loadState = async () => {
            try {
                const storageState= await AsyncStorage.getItem(key)
                    if(storageState !== null) {
                        setState(JSON.parse(storageState))
                    }
              
            } catch (error) {
                Alert.alert('Failed to load state from AsynvStorage', error.message)
            }
        }

        loadState()
    }, [key])

    useEffect(() => {
        const saveState = async () => {
            try {
                await AsyncStorage.setItem(key, JSON.stringify(state))
                
            } catch (error) {
                Alert.alert('Failed to save state on AsynvStorage', error.message)
            }
    
        }

        saveState()

    }, [state])

    return [state, setState]
}