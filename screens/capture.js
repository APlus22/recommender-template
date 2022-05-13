import React, { useRef } from 'react';
import { SafeAreaView, Button, PermissionsAndroid, Platform } from 'react-native';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import CameraRoll from '@react-native-community/cameraroll';

import { ShareBox } from './styled';

export default () => {
    const captureRef = useRef();

    const getPhotoUri = async (): Promise<string> => {
        const uri = await captureRef.current.capture();
        console.log('👂👂 Image saved to', uri);
        return uri;
    };

    const onCapture = async (social: Share.Social) => {
        try {
            const uri = await getPhotoUri();

            const options = {
                title: 'Share Title',
                message: 'Share Message',
                url: uri,
                type: 'image/jpeg',
            };

            if (social === null) {
                const result = await Share.open(options);
                console.log('😻😻 result with no social', result);
            } else {
                const result = await Share.shareSingle({
                    ...options,
                    social,
                });
                console.log(`😻😻 result with social ${social}`, result);
            }
        } catch (e) {
            console.log('😻😻😻 snapshot failed', e);
        }
    };

    const hasAndroidPermission = async () => {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    };

    const onSave = async () => {
        if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
            toast('갤러리 접근 권한이 없어요');
            return;
        }

        const uri = await getPhotoUri();
        const result = await CameraRoll.save(uri);
        console.log('🐤result', result);
    };

    return (
        <SafeAreaView>
            <ViewShot ref={captureRef} options={{ format: 'jpg', quality: 0.9 }}>
                <ShareBox>
                    <SSubColorText>이 박스가 캡쳐됩니다</SSubColorText>
                </ShareBox>
            </ViewShot>

            <Button title="갤러리에 저장" onPress={onSave} />
        </SafeAreaView>
    );
};