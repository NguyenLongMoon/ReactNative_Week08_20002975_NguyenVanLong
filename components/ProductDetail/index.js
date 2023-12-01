import { View, Text, StatusBar, SafeAreaView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function ProductDetail({navigation, route}) {
    const {product} = route.params;
    const [quantity, setQuantity] = useState(1);
  return (
    <View style={{flex: 1}}> 
        <StatusBar/>
        <SafeAreaView style={{flex: 1, padding: 10}}>
            <View style={{flex: 1}}>
                <Image
                    source={{uri: product.largeImg}}
                    resizeMode='contain'
                    style={{width: "100%", height: "100%"}}
                />
            </View>
            



            
        </SafeAreaView>
    </View>
  )
}