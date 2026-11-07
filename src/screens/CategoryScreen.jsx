import { View, StyleSheet, ScrollView } from "react-native";
import CategoryItemCard from "../components/CategoryItemCard";
import { getCategoryItems } from "../data/data";

export default function CategoryScreen({
    route,
    navigation,
}) {
    navigation.setOptions({
        title: route.params.categoryName
    });

    const categoryId = route.params.categoryId;
    const categoryItems = getCategoryItems(categoryId);

    return (
        <ScrollView>
            <View style={styles.container}>
                {categoryItems.map((item) => (
                    <CategoryItemCard
                        key={item.id}
                        {...item}
                        onPress={() => navigation.navigate("Details", { item })}
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
