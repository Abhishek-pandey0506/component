import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';
import CustomIcon, { ICON_TYPE } from './CustomIcon';
import { Colors, Fonts, Images, } from '../resources';
import { moderateScale, moderateScaleVertical, textScale } from '../_helpers';
import Button from './core/Button';
import Spacer from './Spacer';
import { launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import EmojiPicker from 'rn-emoji-keyboard';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { postService } from '../_services';
import { useAppContext } from '../_customContext/AppProvider';
import { Avatar } from 'react-native-paper';
import { useSelector } from 'react-redux';

const schema = yup.object().shape({
    description: yup.string().required('Description is required'),
    price: yup.string(),
    title: yup.string(),
    status: yup.string(),
    locked: yup.string(),
});

const PostInputBox = ({ onRefrash = () => { }, initialValues, onUpdate, onCancel }) => {
    const authAvatar = useSelector(state => state.auth?.user?.avatar)
    // console.log(authAvatar)
    const { control, handleSubmit, formState: { errors }, reset, setValue, getValues } = useForm({
        resolver: yupResolver(schema),
        defaultValues: initialValues || {
            description: '',
            price: '',
            title: '',
            status: 'active',
            locked: 'yes',
        }
    });

    const [image, setImage] = useState(null);
    const [zipFile, setZipFile] = useState(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showPriceInput, setShowPriceInput] = useState(false);
    const [showTextInput, setShowTextInput] = useState(false);
    const [locked, setlocked] = useState(true);
    const { showToast } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    useEffect(() => {
        if (initialValues) {
            setIsUpdateMode(true);
            setShowPriceInput(initialValues.price !== '');
            setShowTextInput(initialValues.title !== '');
            setlocked(initialValues.locked === "yes");
        }
    }, [initialValues]);

    const onSubmit = async (data) => {
        // console.log(data)
        setIsLoading(true);
        try {
            let response;
            if (isUpdateMode) {
                response = await postService.updatePost({ ...data, post_id: initialValues.id });
                // console.log(response)
                showToast('Post updated successfully');
                if (onUpdate) onUpdate(response.data);
            } else {
                response = await postService.createPost(data);
                showToast('Post created successfully');
                reset();
                setImage(null);
                setZipFile(null);
                setShowPriceInput(false);
                setShowTextInput(false);
                setlocked(true);
            }
            // console.log(response);
            onRefrash();
        } catch (error) {
            console.error('Error:', error.response.data.validation_error.price[0]);
            if(error.response?.data?.validation_error?.price){
                showToast(error.response.data?.validation_error?.price[0], 'error')
                return
            }
             showToast(isUpdateMode ? 'Failed to update post' : 'Failed to create post', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    // Function to handle image upload
    const uploadImage = async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, (response) => {
            if (!response.didCancel && response.assets && response.assets.length > 0) {
                const selectedImage = response.assets[0];
                setImage({
                    uri: selectedImage.uri,
                    fileName: selectedImage.fileName,
                    fileSize: (selectedImage.fileSize / 1024).toFixed(2) + ' KB',
                });
            }
        });
    };

    // Function to handle ZIP file upload
    const uploadZip = async () => {
        try {
            const response = await DocumentPicker.pick({
                type: [DocumentPicker.types.zip],
            });
            setZipFile({
                name: response[0].name,
                size: (response[0].size / 1024).toFixed(2) + ' KB',
            });
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // console.log('User cancelled document picker');
            } else {
                console.error('Error: ', err);
            }
        }
    };

    // Remove the image
    const removeImage = () => {
        setImage(null);
    };

    // Remove the ZIP file
    const removeZip = () => {
        setZipFile(null);
    };

    const addEmoji = emoji => {
        setValue('description', getValues('description') + emoji.emoji);
        setShowEmojiPicker(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Avatar.Image style={styles.userIcon} source={authAvatar ? { uri: authAvatar } : Images.user} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                style={[styles.inputText, error && styles.inputError]}
                                placeholder="Write something..."
                                placeholderTextColor={Colors.text}
                                multiline={true}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </>
                    )}
                    name="description"
                />
            </View>
            {errors?.description && <Text style={styles.errorText}>{errors.description.message}</Text>}

            {showPriceInput && (
                <View style={styles.additionalInputs}>
                    <CustomIcon
                        name="dollar"
                        style={styles.iconInput}
                        size={textScale(16)}
                        color={Colors.lightGray}
                        origin={ICON_TYPE.FONT_AWESOME}
                    />
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.additionalInputText}
                                placeholder="Price"
                                placeholderTextColor={Colors.text}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="price"
                    />
                </View>
            )}
            {showTextInput && (
                <View>
                    <View style={styles.additionalInputs}>
                        <CustomIcon
                            name="text"
                            size={textScale(16)}
                            style={styles.iconInput}
                            color={Colors.lightGray}
                            origin={ICON_TYPE.ICONICONS}
                        />
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.additionalInputText}
                                    placeholder="Title"
                                    placeholderTextColor={Colors.text}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="title"
                        />
                    </View>
                    <Text style={styles.additionalInputDisclaimer}>Maximum 100 characters, it will be ignored if the post contains multimedia files, or is public.</Text>
                    <Spacer height={moderateScaleVertical(5)} />
                </View>
            )}
            {zipFile && (
                <View style={styles.uploadedFileContainer}>
                    <CustomIcon name="file-zip-o" size={textScale(40)} color={Colors.primary} origin={ICON_TYPE.FONT_AWESOME} />
                    <View style={styles.fileInfo}>
                        <Text style={styles.fileName}>{zipFile.name}</Text>
                        <Text style={styles.fileSize}>{zipFile.size}</Text>
                    </View>
                    <TouchableOpacity onPress={removeZip} style={styles.closeIcon}>
                        <CustomIcon name="close" size={textScale(20)} color={Colors.red} origin={ICON_TYPE.FONT_AWESOME} />
                    </TouchableOpacity>
                </View>
            )}

            {image && (
                <View style={styles.uploadedFileContainer}>
                    <Image source={{ uri: image.uri }} style={styles.uploadedImage} />
                    <View style={styles.fileInfo}>
                        <Text style={styles.fileName}>{image.fileName}</Text>
                        <Text style={styles.fileSize}>{image.fileSize}</Text>
                    </View>
                    <TouchableOpacity onPress={removeImage} style={styles.closeIcon}>
                        <CustomIcon name="close" size={textScale(20)} color={Colors.red} origin={ICON_TYPE.FONT_AWESOME} />
                    </TouchableOpacity>
                </View>
            )}


            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={uploadImage}>
                    <CustomIcon
                        name="image"
                        size={textScale(20)}
                        color={Colors.primary}
                        origin={ICON_TYPE.FEATHER_ICONS}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={uploadZip}>
                    <CustomIcon
                        name="file-zip-o"
                        size={textScale(20)}
                        color={Colors.primary}
                        origin={ICON_TYPE.FONT_AWESOME}
                    />
                </TouchableOpacity>
                {
                    !initialValues?.price && (
                        <TouchableOpacity style={styles.footerButton} onPress={() => setShowPriceInput(!showPriceInput)}>
                        <CustomIcon
                            name="tag"
                            size={textScale(20)}
                            color={Colors.primary}
                            origin={ICON_TYPE.FEATHER_ICONS}
                        />
                    </TouchableOpacity>
                    ) 
                }


                {(!initialValues || initialValues?.price == '' )&& (
                    <TouchableOpacity style={styles.footerButton} onPress={() => {
                        setlocked(!locked);
                        setValue('locked', locked ? 'no' : 'yes');
                    }}>
                        <CustomIcon
                            name={locked ? "lock" : "unlock"}
                            size={textScale(20)}
                            color={Colors.primary}
                            origin={ICON_TYPE.FEATHER_ICONS}
                        />
                    </TouchableOpacity>
                )}


                {!isUpdateMode && (
                    <TouchableOpacity style={styles.footerButton}>
                        <CustomIcon
                            name="broadcast"
                            size={textScale(20)}
                            color={Colors.primary}
                            origin={ICON_TYPE.OCTICONS}
                        />
                    </TouchableOpacity>
                )}

                <TouchableOpacity style={styles.footerButton} onPress={() =>{ 
                    setShowTextInput(!showTextInput)
                    setValue('title', '')
                    }}>
                    <CustomIcon
                        name="text"
                        size={textScale(18)}
                        color={Colors.primary}
                        origin={ICON_TYPE.ICONICONS}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={() => setShowEmojiPicker(!showEmojiPicker)}>
                    <CustomIcon
                        name="smile"
                        size={textScale(18)}
                        color={Colors.primary}
                        origin={ICON_TYPE.FEATHER_ICONS}
                    />
                </TouchableOpacity>
            </View>
            <Spacer height={moderateScaleVertical(15)} />
            <View style={styles.buttonContainer}>


                <TouchableOpacity
                    style={[styles.button, styles.publishButton]}
                    onPress={handleSubmit(onSubmit)}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color={Colors.white} />
                    ) : (
                        <Text style={styles.buttonText}>{isUpdateMode ? 'Update' : 'Publish'}</Text>
                    )}
                </TouchableOpacity>
                {onCancel && (
                    <TouchableOpacity
                        style={[styles.button, styles.cancelButton]}
                        onPress={onCancel}
                    >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                )}
            </View>
            {showEmojiPicker && (
                <EmojiPicker
                    onEmojiSelected={addEmoji}
                    open={showEmojiPicker}
                    enableSearchBar={true}
                    enableRecentlyUsed={true}
                    categoryPosition="top"
                    onClose={() => setShowEmojiPicker(false)}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: moderateScale(10),
        padding: moderateScale(15),
        margin: moderateScale(10),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScaleVertical(5),
    },
    userIcon: {
        alignSelf: 'flex-start',
        marginRight: moderateScale(10),
        width: moderateScale(60),
        height: moderateScale(60),
        borderRadius: moderateScale(30),
    },
    inputText: {
        fontSize: textScale(16),
        fontFamily: Fonts.regular,
        color: Colors.text,
        minHeight: moderateScaleVertical(100),
        textAlignVertical: 'top',
        flex: 1,
    },
    additionalInputDisclaimer: {
        fontSize: textScale(14),
        fontFamily: Fonts.regular,
        color: Colors.text,
        textAlign: 'left',
        paddingVertical: moderateScaleVertical(5),
    },
    iconInput: {
        paddingHorizontal: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: moderateScaleVertical(30),
    },
    footerButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerButtonText: {
        fontSize: textScale(14),
        fontFamily: Fonts.regular,
        color: Colors.primary,
        marginLeft: moderateScale(5),
    },
    additionalInputs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: moderateScaleVertical(10),
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: moderateScale(5),
        height: moderateScaleVertical(50),
    },
    additionalInputText: {
        fontSize: textScale(16),
        fontFamily: Fonts.regular,
        color: Colors.text,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: moderateScaleVertical(10),
        gap: moderateScale(5)
    },
    button: {
        flex: 1,
        padding: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(50),
    },
    cancelButton: {
        backgroundColor: Colors.lightGray,
        marginRight: moderateScale(5),
    },
    publishButton: {
        backgroundColor: Colors.primary,
        marginLeft: moderateScale(5),
    },
    buttonText: {
        fontSize: textScale(16),
        fontFamily: Fonts.bold,
        color: Colors.white,
    },
    blankImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: moderateScaleVertical(10),
    },
    blankImage: {
        width: moderateScale(100),
        height: moderateScale(100),
    },
    fileUploadthumbnail: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: moderateScale(10),
        backgroundColor: '#e6ebf4',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.gray,
        borderStyle: 'dashed',
    },
    uploadedFileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: moderateScale(10),
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: moderateScale(5),
        padding: moderateScale(5),
    },
    uploadedImage: {
        width: moderateScale(60),
        height: moderateScale(60),
        borderRadius: moderateScale(5),
    },
    fileInfo: {
        flex: 1,
        marginLeft: moderateScale(10),
    },
    fileName: {
        fontSize: textScale(14),
        fontFamily: Fonts.regular,
        color: Colors.text,
    },
    fileSize: {
        fontSize: textScale(12),
        fontFamily: Fonts.regular,
        color: Colors.gray,
    },
    closeIcon: {
        marginLeft: moderateScale(10),
    },
    errorText: {
        color: Colors.danger
    }
});

export default PostInputBox;
