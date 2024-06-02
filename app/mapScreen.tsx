import { router } from 'expo-router';
import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { screenHeight } from '@/utils/sizes';
import BottomSheet, { BottomSheetRef } from '@/components/BottomSheet/BottomSheet';

const MapScreen: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheetRef>(null);

  const onMapReady = () => {
    setTimeout(() => {
      bottomSheetRef.current?.openBottomSheet();
    }, 500);
  };

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 14.599512,
          longitude: 120.984222,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onMapReady={onMapReady}
        style={styles.mapViewStyle}
      />
      <TouchableOpacity style={styles.backButtonStyle} onPress={router.back}>
        <Text>Back</Text>
      </TouchableOpacity>
      <BottomSheet
        noBackDrop
        disableOnClose
        ref={bottomSheetRef}
        screenSize={screenHeight >= 800 ? 0.2 : 0.3}
        customContainerStyle={styles.bottomSheetStyle}
      >
        <Text>Hello world</Text>
      </BottomSheet>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapViewStyle: {
    flex: 1,
  },
  backButtonStyle: {
    position: 'absolute',
    top: 0,
    marginLeft: 10,
    marginTop: 60,
    width: 90,
    borderWidth: 5,
    borderColor: 'white',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'violet',
  },
  bottomSheetStyle: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});
