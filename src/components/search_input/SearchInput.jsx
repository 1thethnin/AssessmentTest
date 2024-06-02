import { Image, TextInput, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { COLORS } from '../../styles';

export default function SearchInput(props) {
    return (
        <View
            style={{
                ...props.style,
                flexDirection: 'row',
                width: '100%',
            }}>
            <View
                {...props}
                style={{ ...styles.inputContainer }}>
                <View style={styles.rightIcon}>
                    <Image source={require('../../assets/icons/search.png')} style={{width: 20, height: 20}} />
                </View>
                <TextInput
                    {...props}
                    placeholderTextColor={COLORS.borderColor}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    style={styles.input}
                />
            </View>

        </View>
    );
}

