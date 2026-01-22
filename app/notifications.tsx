import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const featuredReleases = [
  {
    id: 1,
    version: "v3.0.0",
    product: "Mobile App",
    highlight: "Complete UI Redesign",
    date: "Coming Soon",
    color: "#5856D6",
  },
  {
    id: 2,
    version: "v2.8.0",
    product: "API Services",
    highlight: "GraphQL Support Added",
    date: "Feb 1, 2026",
    color: "#34C759",
  },
];

const searchResults = [
  { id: 1, term: "dark mode", count: 8 },
  { id: 2, term: "performance", count: 15 },
  { id: 3, term: "bug fix", count: 34 },
  { id: 4, term: "security", count: 12 },
];

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search & Featured</Text>
        <Text style={styles.headerSubtitle}>Find what you are looking for</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#8E8E93" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search releases..."
              placeholderTextColor="#8E8E93"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Releases</Text>
          {featuredReleases.map((release) => (
            <TouchableOpacity
              key={release.id}
              style={[styles.featuredCard, { borderLeftColor: release.color }]}
              activeOpacity={0.7}
            >
              <View style={styles.featuredHeader}>
                <View style={[styles.productBadge, { backgroundColor: release.color }]}>
                  <Ionicons name="star" size={16} color="#FFFFFF" />
                </View>
                <Text style={styles.productName}>{release.product}</Text>
              </View>
              <Text style={styles.versionText}>{release.version}</Text>
              <Text style={styles.highlightText}>{release.highlight}</Text>
              <View style={styles.dateContainer}>
                <Ionicons name="calendar-outline" size={14} color="#8E8E93" />
                <Text style={styles.dateText}>{release.date}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Searches</Text>
          <View style={styles.tagsContainer}>
            {searchResults.map((result) => (
              <TouchableOpacity key={result.id} style={styles.tag}>
                <Text style={styles.tagText}>{result.term}</Text>
                <View style={styles.tagBadge}>
                  <Text style={styles.tagBadgeText}>{result.count}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Filters</Text>
          <View style={styles.filterGrid}>
            <TouchableOpacity style={[styles.filterCard, { backgroundColor: "#FF3B30" }]}>
              <Ionicons name="flame" size={24} color="#FFFFFF" />
              <Text style={styles.filterText}>Major</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterCard, { backgroundColor: "#007AFF" }]}>
              <Ionicons name="sparkles" size={24} color="#FFFFFF" />
              <Text style={styles.filterText}>New</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterCard, { backgroundColor: "#34C759" }]}>
              <Ionicons name="checkmark-circle" size={24} color="#FFFFFF" />
              <Text style={styles.filterText}>Fixes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterCard, { backgroundColor: "#FF9500" }]}>
              <Ionicons name="shield-checkmark" size={24} color="#FFFFFF" />
              <Text style={styles.filterText}>Security</Text>
            </TouchableOpacity>
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
  searchSection: {
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F7",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#1C1C1E",
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 16,
  },
  featuredCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  featuredHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  productBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8E8E93",
  },
  versionText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#007AFF",
    marginBottom: 8,
  },
  highlightText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 12,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    fontSize: 14,
    color: "#8E8E93",
    marginLeft: 6,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tagText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1C1C1E",
    marginRight: 8,
  },
  tagBadge: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  tagBadgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  filterGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  filterCard: {
    width: "48%",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  filterText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginTop: 8,
  },
});
