import { View, StyleSheet, ScrollView, Alert, RefreshControl } from "react-native";
import CategoryItemCard from "../components/CategoryItemCard";
import { useEffect, useState } from "react";
import { mealApi } from "../api";

export default function CategoryScreen({
    route,
    navigation,
}) {
    const [meals, setMeals] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            title: route.params.categoryName
        });
    }, [])

    const categoryId = route.params.categoryId;

    useEffect(() => {
        mealApi.getMealsByCategory(categoryId)
            .then(setMeals)
            .catch(err => Alert.alert('Error', err.message))
    }, [categoryId])

    const handleRefresh = async () => {
        setRefreshing(true);

        try {
            const data = await mealApi.getMealsByCategory(categoryId)
            setMeals(data)

        } catch (err) {
            Alert.alert('Error', err.message)

        } finally {
            setRefreshing(false)
        }
    }

    return (
        <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        >
            <View style={styles.container}>
                {meals.map((item) => (
                    <CategoryItemCard
                        key={item.id}
                        {...item}
                        onPress={() => navigation.navigate("Details", { itemId: item.id })}
                    />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
});
