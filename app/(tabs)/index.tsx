import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Định nghĩa kiểu dữ liệu Seed
type Seed = {
  id: string;
  name: string;
  image: any;
};

// Danh sách hạt giống
const seedList: Seed[] = [
  { id: '1', name: 'Orange', image: require('/Users/MAY02/Desktop/ecosmart/assets/images/orange.jpg') },
  { id: '2', name: 'Apple', image: require('/Users/MAY02/Desktop/ecosmart/assets/images/apple.jpg') },
];

export default function HomeScreen() {
  const [selectedSeed, setSelectedSeed] = useState<Seed | null>(null);

  return (
    <View style={styles.container}>
      {/* Danh sách hạt giống */}
      {seedList.map((seed) => (
        <TouchableOpacity
          key={seed.id}
          onPress={() => setSelectedSeed(seed)}
          style={styles.seedButton}
        >
          <Image source={seed.image} style={styles.seedImage} />
          <Text style={styles.seedName}>{seed.name}</Text>
        </TouchableOpacity>
      ))}

      {/* Hiển thị hạt giống được chọn */}
      {selectedSeed && (
        <View style={styles.selectedContainer}>
          <Text style={styles.selectedText}>You selected:</Text>
          <Image source={selectedSeed.image} style={styles.selectedImage} />
          <Text style={styles.selectedName}>{selectedSeed.name}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  seedButton: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  seedImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  seedName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  selectedContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  selectedImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  selectedText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  selectedName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },
});
