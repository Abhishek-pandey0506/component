import React from 'react'
import {View, Text} from 'react-native'
import {GlobalStyles, Colors} from '../resources'
import { moderateScale, moderateScaleVertical, textScale } from '../_helpers'

export default function Divider({title, style}) {
  return (
    <View
      style={{
        marginVertical: moderateScaleVertical(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: moderateScale(10),
        ...style,
      }}>
      <Text style={[GlobalStyles.divider]}></Text>
      <Text
        style={[GlobalStyles.textWhite, {fontSize: textScale(14), textAlign: 'center'}]}>
        {title}{' '}
      </Text>
      <Text style={[GlobalStyles.divider]}></Text>
    </View>
  )
}
