import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const releases = [
  {
    id: 1,
    version: "v2.5.0",
    date: "Jan 22, 2026",
    title: "Major Update: New Features",
    description: "Introducing dark mode, performance improvements, and bug fixes.",
    type: "major",
  },
  {
    id: 2,
    version: "v2.4.1",
    date: "Jan 15, 2026",
    title: "Bug Fixes & Improvements",
    description: "Fixed critical bugs and improved app stability.",
    type: "patch",
  },
  {
    id: 3,
    version: "v2.4.0",
    date: "Jan 8, 2026",
    title: "New Dashboard",
    description: "Redesigned dashboard with better analytics and insights.",
    type: "minor",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Latest Releases</Text>
        <Text style={styles.headerSubtitle}>Stay updated with new features</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {releases.map((release) => (
          <TouchableOpacity key={release.id} style={styles.card} activeOpacity={0.7}>
            <View style={styles.cardHeader}>
              <View style={[styles.badge, styles[`${release.type}Badge`]]}>
                <Text style={styles.badgeText}>
                  {release.type.toUpperCase()}
                </Text>
              </View>
              <Text style={styles.date}>{release.date}</Text>
            </View>

            <View style={styles.versionContainer}>
              <Ionicons name="rocket" size={24} color="#007AFF" />
              <Text style={styles.version}>{release.version}</Text>
            </View>

            <Text style={styles.cardTitle}>{release.title}</Text>
            <Text style={styles.cardDescription}>{release.description}</Text>

            <TouchableOpacity style={styles.readMoreButton}>
              <Text style={styles.readMoreText}>Read More</Text>
              <Ionicons name="chevron-forward" size={16} color="#007AFF" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
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
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  majorBadge: {
    backgroundColor: "#FF3B30",
  },
  minorBadge: {
    backgroundColor: "#007AFF",
  },
  patchBadge: {
    backgroundColor: "#34C759",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
  date: {
    fontSize: 14,
    color: "#8E8E93",
  },
  versionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  version: {
    fontSize: 24,
    fontWeight: "700",
    color: "#007AFF",
    marginLeft: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 15,
    color: "#3C3C43",
    lineHeight: 22,
    marginBottom: 16,
  },
  readMoreButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  readMoreText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#007AFF",
    marginRight: 4,
  },
});
