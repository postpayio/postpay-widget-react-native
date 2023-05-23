import React, { useState } from 'react';
import { Modal, SafeAreaView, StyleSheet, View } from 'react-native';
import WidgetBase, { WidgetBaseProps } from './WidgetBase';
import ModalInfo from './ModalInfo';

const PostpayWidget = (props: WidgetBaseProps) => {
    const [visible, setVisible] = useState(false);

    const onPressLink = () => {
        setVisible(true);
    };

    const requestCloseModal = () => {
        setVisible(false);
    };

    const { style, ...rest } = props;

    return (
        <View>
            <WidgetBase {...props} onPressLink={onPressLink} />
            <Modal
                onRequestClose={requestCloseModal}
                transparent
                visible={visible}
                animationType="fade">
                <SafeAreaView style={styles.wrapModal}>
                    <ModalInfo {...rest} requestCloseModal={requestCloseModal} />
                </SafeAreaView>
            </Modal>
        </View>
    );
};

export default PostpayWidget;

const styles = StyleSheet.create({
    wrapModal: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
});
