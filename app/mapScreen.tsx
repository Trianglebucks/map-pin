import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { screenHeight } from '@/utils/sizes';
import BottomSheet, { BottomSheetRef } from '@/components/BottomSheet/BottomSheet';

const MapScreen: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheetRef>(null);

  const initialRegion = {
    latitude: 14.644379580295222,
    longitude: 121.02490102698776,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [region, setRegion] = useState(initialRegion);

  const onRegionChange = (region: any) => {
    setRegion(region);
  };

  const onMapReady = () => {
    setTimeout(() => {
      bottomSheetRef.current?.openBottomSheet();
    }, 500);
  };

  return (
    <View style={styles.container}>
      <MapView
        onMapReady={onMapReady}
        style={styles.mapViewStyle}
        region={region}
        onRegionChange={onRegionChange}
      >
        <Marker coordinate={region} title={'Home Address'} description={'Where I live'} />
      </MapView>
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
