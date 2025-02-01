import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Modal,
  ScrollView,
} from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import { colors } from "../resources/colors";
import { moderateScaleVertical } from "../helper/responsiveSize";

const CustomPicker = ({
  items = [],
  placeholder = "Select an option",
  isDisabled = false,
  isSearchable = false,
  defaultValue = "",
  onValueChange,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const filteredItems = items.filter((item) =>
    item?.label?.toLowerCase()?.includes(searchQuery.toLowerCase())
  );

  const handleSelect = (value) => {
    setSelectedValue(value.value); // Store value, not the label
    setDropdownVisible(false);
    if (onValueChange) onValueChange(value);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
      <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  // Find selected item based on value for display
  const selectedItem = items.find((item) => item.value === selectedValue);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.pickerButton, isDisabled && styles.disabled]}
        onPress={() => !isDisabled && setDropdownVisible(true)} // Open modal on press
      >
        <Text
          style={[styles.pickerText, { color: selectedValue ? colors.Black : "#757D8B" }]}
        >
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        <Icons
          name={dropdownVisible ? "caret-up" : "caret-down"}
          size={20}
          color={colors.Dark}
        />
      </TouchableOpacity>

      {/* Modal for dropdown */}
      <Modal
        transparent={true}
        visible={dropdownVisible}
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)} // Close on outside touch
      >
        <View style={styles.modalOverlay}>
          <View style={styles.dropdownContainer}>
            <View style={styles.dropdown}>
              {isSearchable && (
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search..."
                  value={searchQuery}
                  placeholderTextColor={"#000"}
                  onChangeText={setSearchQuery}
                />
              )}
              <ScrollView contentContainerStyle={styles.dropdownList}>
                <FlatList
                  data={filteredItems.length ? filteredItems : items}
                  renderItem={renderItem}
                  keyExtractor={(item) => item?.value?.toString()}
                />
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  pickerButton: {
    width: "100%",
    padding: 15,
    height: 50,
    backgroundColor: "#F7F8FB",
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  pickerText: {
    fontSize: 14,
    // fontWeight: "bold",
  },
  disabled: {
    opacity: 0.6,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  dropdownContainer: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 15, // Margin on all sides
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    width: "100%",
    backgroundColor: colors.MediumLight,
    borderRadius: 8,
    elevation: 5,
    padding: 10,
    maxHeight: "80%", // Limit the dropdown height to 80% of the screen height
  },
  searchInput: {
    height: 40,
    borderColor: colors.Primary,
    color: colors.Black,
    backgroundColor: colors.White,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dropdownList: {
    flexGrow: 1,
    paddingBottom: 10, // Add space for bottom of the list
  },
  item: {
    paddingVertical: 10,
    borderBottomColor: colors.White,
  },
  itemText: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600", // You can adjust the weight for better readability
    color: colors.Black,
  },
});

export default CustomPicker;
