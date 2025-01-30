import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { Card, Avatar, IconButton, Button, Paragraph, Title, Subheading, Caption, Menu, Dialog, Portal } from 'react-native-paper';
import CustomIcon, { ICON_TYPE } from './CustomIcon';
import { Colors, Fonts, Images, } from '../resources';
import { moderateScale, moderateScaleVertical, textScale } from '../_helpers';
import Spacer from './Spacer';
import { launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import EmojiPicker from 'rn-emoji-keyboard'
import { useAppContext } from '../_customContext/AppProvider';
import { postService } from '../_services';
import PostInputBox from './PostInputBox';
import moment from 'moment';

const PostCard = ({ post, onRefrash, onUpdatePost, hideMenu = false }) => {
    const { showToast, showLoader, hideLoader } = useAppContext()
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [comment, setComment] = useState('');
    const [menuVisible, setMenuVisible] = useState(false);
    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const handleCommentIconPress = () => {
        setShowCommentBox((show) => !show);
    };

    const handleShareIconPress = () => {
        // Logic to open share options
        // // console.log('Share button pressed');
    };

    const handleSendComment = () => {
        // Logic to send the comment
        // // console.log('Comment sent:', comment);
        setComment('');
        setShowCommentBox(false);
    };

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const handleEditPost = () => {
        setEditMode(true);
        closeMenu();
    };

    const handleDeletePost = () => {
        setDeleteDialogVisible(true);
        closeMenu();
    };

    const confirmDeletePost = async () => {
        const formData = {
            post_id: post?.id
        }
        // // console.log(formData)
        try {
            // Call delete API here
            await postService.deletePost(formData);
            showToast('Post deleted successfully');
            onRefrash(post.id);   
        } catch (error) {
            // console.log(error.response)
            showToast('Failed to delete post', 'error');
        } finally {
            setDeleteDialogVisible(false);
        }
    };

    const handleUpdatePost = (updatedPost) => {
        onRefrash(updatedPost);
        setEditMode(false);
    };

    const handleCancelEdit = () => {
        setEditMode(false);
    };
    return (
        <Card style={styles.container}>
            {editMode ? (
                <PostInputBox
                    initialValues={{
                        description: post.description,
                        price: post.price == '0.00' ? '' : post.price,
                        title: post.title ?? '',
                        status: post.status,
                        locked: post.locked,
                        id: post.id
                    }}
                    onUpdate={handleUpdatePost}
                    onCancel={handleCancelEdit}
                />
            ) : (
                <>
                    <Card.Title
                        title={
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>{post.creator.name}</Text>
                                <CustomIcon
                                        name="check-decagram"
                                        size={16}
                                        color="#1DA1F2"
                                        style={{ marginLeft: 5 }}
                                        origin={ICON_TYPE.MATERIAL_COMMUNITY}
                                    />
                                <Text style={{  marginLeft: 5 }}>@{post.creator.username}</Text>
                            </View>
                        }
                        subtitle={
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>{moment(post.date).fromNow()}</Text>
                                {post.locked === 'yes' && (
                                    <CustomIcon
                                        name="lock"
                                        size={14}
                                        color="#657786"
                                        style={{ marginLeft: 5 }}
                                        origin={ICON_TYPE.FEATHER_ICONS}
                                    />
                                )}
                                  {post.locked === 'no' && (
                                    <CustomIcon
                                        name="globe"
                                        size={14}
                                        color="#657786"
                                        style={{ marginLeft: 5 }}
                                        origin={ICON_TYPE.FONT_AWESOME}
                                    />
                                )}
                                {post?.price !== "0.00" && (
                                    <Text style={{ marginLeft: 5 }}>${post?.price}</Text>
                                )}
                            </View>
                        }
                        left={(props) => <Avatar.Image {...props} source={post?.creator?.avatar ? { uri: 'https://panel.dan-project.com/uploads/avatar/' + post.creator.avatar } : Images.user} />}
                        right={(props) => (
                            !hideMenu && (
                                <Menu
                                    visible={menuVisible}
                                    onDismiss={closeMenu}
                                    anchor={
                                        <IconButton {...props} icon="dots-horizontal" onPress={openMenu} />
                                    }
                                >
                                    <Menu.Item onPress={handleEditPost} title="Edit Post" />
                                    <Menu.Item onPress={handleDeletePost} title="Delete Post" />
                                </Menu>
                            )
                        )}
                    />
                    <Card.Content>
                        <Paragraph>{post.description}</Paragraph>
                        {post.media && post.media.length > 0 && (
                            <Card style={styles.uploadedFileContainer}>
                                <Card.Cover source={{ uri: post.media[0].url }} style={styles.uploadedImage} />
                                <Card.Content>
                                    <Title>{post.media[0].filename}</Title>
                                    <Paragraph>{post.media[0].size}</Paragraph>
                                </Card.Content>
                            </Card>
                        )}
                    </Card.Content>
                    <Card.Actions>
                        <IconButton icon="heart-outline" onPress={() => { }} />
                        <IconButton icon="comment-outline" onPress={handleCommentIconPress} />
                        <IconButton icon="share" onPress={handleShareIconPress} />
                        <View style={{ flex: 1 }} />
                        <IconButton icon="bookmark-outline" onPress={() => { }} />
                    </Card.Actions>
                    <Card.Content>
                        <Paragraph>{post.user_data.totalLikes} likes • {post.user_data.totalComments} comments</Paragraph>
                    </Card.Content>
                    {showCommentBox && (
                        <Card.Content style={styles.commentBoxContainer}>
                            <CustomIcon name='user' size={textScale(24)} color={Colors.gray} origin={ICON_TYPE.FEATHER_ICONS} />
                            <TextInput
                                style={styles.commentInput}
                                placeholder="Add a comment..."
                                value={comment}
                                onChangeText={setComment}
                            />
                            <TouchableOpacity onPress={handleSendComment}>
                                <CustomIcon name='send' size={textScale(24)} color={Colors.primary} origin={ICON_TYPE.FEATHER_ICONS} />
                            </TouchableOpacity>
                        </Card.Content>
                    )}
                </>
            )}
            <Portal>
                <Dialog visible={deleteDialogVisible} onDismiss={() => setDeleteDialogVisible(false)}>
                    <Dialog.Title>Delete Post</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Are you sure you want to delete this post?</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setDeleteDialogVisible(false)}>Cancel</Button>
                        <Button onPress={confirmDeletePost}>Delete</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: moderateScale(7),
        backgroundColor: Colors.white,
        paddingVertical: moderateScaleVertical(10)
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScaleVertical(5),
    },
    userIcon: {
        alignSelf: 'flex-start',
        marginRight: moderateScale(10),
        width: moderateScale(50),
        height: moderateScale(50),
        borderRadius: moderateScale(25),
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
        borderTopColor: Colors.lightGray,
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
    publishButton: {
        backgroundColor: Colors.primary,
        padding: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(50),
        marginTop: moderateScaleVertical(10),
    },
    publishButtonText: {
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
        marginVertical: moderateScale(10),
    },
    uploadedImage: {
        height: moderateScale(200),
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
    commentBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: Colors.lightGray,
        padding: moderateScale(5),
        marginTop: moderateScale(10),
    },
    commentInput: {
        flex: 1,
        fontSize: textScale(14),
        fontFamily: Fonts.regular,
        color: Colors.text,
        marginLeft: moderateScale(10),
    },
    title: {
        fontSize: textScale(20),
        fontFamily: Fonts.bold,
        color: Colors.primary,
    },
    subTitle: {
        fontSize: textScale(16),
        fontFamily: Fonts.regular,
        color: Colors.text,
    },
    timeText: {
        fontSize: textScale(14),
        fontFamily: Fonts.regular,
        color: Colors.gray,
    },
    userName: {
        fontSize: textScale(16),
        fontFamily: Fonts.regular,
        color: Colors.text,
    },
});

export default PostCard;
