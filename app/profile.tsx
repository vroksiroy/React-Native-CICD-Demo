import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function SettingsScreen() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
        <Text style={styles.headerSubtitle}>Customize your experience</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={48} color="#FFFFFF" />
            </View>
            <View style={styles.editBadge}>
              <Ionicons name="pencil" size={14} color="#FFFFFF" />
            </View>
          </View>
          <Text style={styles.userName}>John Developer</Text>
          <Text style={styles.userEmail}>john@example.com</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          
          <View style={styles.settingCard}>
            <View style={styles.settingLeft}>
              <View style={[styles.iconCircle, { backgroundColor: "#FF3B30" }]}>
                <Ionicons name="notifications" size={20} color="#FFFFFF" />
              </View>
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Push Notifications</Text>
                <Text style={styles.settingSubtitle}>Get notified about new releases</Text>
              </View>
            </View>
            <Switch
              value={pushEnabled}
              onValueChange={setPushEnabled}
              trackColor={{ false: "#E5E5EA", true: "#34C759" }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={styles.settingCard}>
            <View style={styles.settingLeft}>
              <View style={[styles.iconCircle, { backgroundColor: "#007AFF" }]}>
                <Ionicons name="mail" size={20} color="#FFFFFF" />
              </View>
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Email Digest</Text>
                <Text style={styles.settingSubtitle}>Weekly summary of releases</Text>
              </View>
            </View>
            <Switch
              value={emailEnabled}
              onValueChange={setEmailEnabled}
              trackColor={{ false: "#E5E5EA", true: "#34C759" }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <View style={[styles.iconCircle, { backgroundColor: "#5856D6" }]}>
                <Ionicons name="bookmark" size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.menuText}>Saved Releases</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <View style={[styles.iconCircle, { backgroundColor: "#FF9500" }]}>
                <Ionicons name="heart" size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.menuText}>Favorite Products</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <View style={[styles.iconCircle, { backgroundColor: "#00C7BE" }]}>
                <Ionicons name="download" size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.menuText}>Offline Mode</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <View style={[styles.iconCircle, { backgroundColor: "#8E8E93" }]}>
                <Ionicons name="information-circle" size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.menuText}>App Info</Text>
            </View>
            <View style={styles.versionBadge}>
              <Text style={styles.versionText}>v2.5.0</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <View style={[styles.iconCircle, { backgroundColor: "#34C759" }]}>
                <Ionicons name="help-circle" size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.menuText}>Help & Support</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
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
  profileSection: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingVertical: 32,
    marginBottom: 16,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  editBadge: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#34C759",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  userName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: "#8E8E93",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  settingCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 13,
    color: "#8E8E93",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 12,
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1C1C1E",
  },
  versionBadge: {
    backgroundColor: "#F2F2F7",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  versionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8E8E93",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FF3B30",
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF3B30",
    marginLeft: 8,
  },
});
