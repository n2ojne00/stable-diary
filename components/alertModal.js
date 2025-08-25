import { useNavigation } from '@react-navigation/native';
import { Button, Modal, Pressable, Text, View } from 'react-native';
import txtStyles from '../styles/text';
import ButtonStyles from '../styles/buttons';
import base from '../styles/base';
import { CustomButton } from './pressable';
import colors from '../styles/color';

export default function AlertModal({ visible, onClose, header, firstTitle, firstOption, secondTitle, secondOption }) {

    return (

        <Modal visible={visible} transparent={true} animationType="slide" >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.modalBg,
                }}
            >
                <View style={base.alertModal}>
                    <Text style={txtStyles.title}>{header}</Text>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', }}>
                        <Pressable
                            style={({ pressed }) => [
                                ButtonStyles.base,
                                pressed && ButtonStyles.pressed,]}
                            onPress={() => {
                                onClose();
                                firstOption && firstOption();
                            }}
                        >
                            <Text style={[txtStyles.buttonSmall, { textAlign: 'justify' }]}>{firstTitle}</Text>
                        </Pressable>

                        <Pressable
                            style={({ pressed }) => [
                                ButtonStyles.base,
                                pressed && ButtonStyles.pressed,]}
                            onPress={() => {
                                onClose();
                                secondOption && secondOption();
                            }}
                        >

                            <Text style={[txtStyles.buttonSmall, { textAlign: 'justify' }]}>{secondTitle}</Text>
                        </Pressable>
                    </View>

                    <CustomButton
                        size={"small"}
                        title={'Sulje'}
                        onPress={onClose}
                        reStyle={ButtonStyles.goBackBtn}
                    />
                </View>
            </View>
        </Modal>


    );
};

