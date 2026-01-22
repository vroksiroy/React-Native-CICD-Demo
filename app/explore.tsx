import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const products = [
  { id: 1, name: "Mobile App", icon: "phone-portrait", color: "#007AFF", releases: 24 },
  { id: 2, name: "Web Platform", icon: "globe", color: "#5856D6", releases: 18 },
  { id: 3, name: "API Services", icon: "server", color: "#34C759", releases: 32 },
  { id: 4, name: "Desktop App", icon: "desktop", color: "#FF9500", releases: 15 },
  { id: 5, name: "Cloud Storage", icon: "cloud", color: "#00C7BE", releases: 21 },
  { id: 6, name: "Analytics", icon: "stats-chart", color: "#FF2D55", releases: 12 },
];

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Products</Text>
        <Text style={styles.headerSubtitle}>Browse release notes by product</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {products.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={[styles.productCard, { backgroundColor: product.color }]}
              activeOpacity={0.8}
            >
              <View style={styles.iconContainer}>
                <Ionicons name={product.icon as any} size={40} color="#FFFFFF" />
              </View>
              <Text style={styles.productName}>{product.name}</Text>
              <View style={styles.releaseBadge}>
                <Text style={styles.releaseCount}>{product.releases} releases</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Statistics</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Ionicons name="trending-up" size={32} color="#34C759" />
              <Text style={styles.statNumber}>122</Text>
              <Text style={styles.statLabel}>Total Releases</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="calendar" size={32} color="#007AFF" />
              <Text style={styles.statNumber}>6</Text>
              <Text style={styles.statLabel}>This Month</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#8E8E93",
  },
  scrollView: {
    flex: 1,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    gap: 16,
  },
  productCard: {
    width: "47%",
    borderRadius: 20,
    padding: 20,
    aspectRatio: 1,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginTop: 8,
  },
  releaseBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: "flex-start",
  },
  releaseCount: {
    fontSize: 13,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  statsContainer: {
    padding: 16,
    paddingTop: 0,
  },
  statsTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  statsGrid: {
    flexDirection: "row",
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statNumber: {
    fontSize: 36,
    fontWeight: "800",
    color: "#1C1C1E",
    marginTop: 12,
  },
  statLabel: {
    fontSize: 14,
    color: "#8E8E93",
    marginTop: 4,
  },
});
