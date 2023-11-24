import React, { useState } from 'react';
import { Modal, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const FileUploadPopup = ({ isVisible, onClose, onFileUpload }) => {
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleUpload = () => {
    if (fileList.length > 0) {
      onFileUpload(fileList[0].originFileObj);
      message.success('File uploaded successfully');
      setFileList([]);
      onClose();
    } else {
      message.error('Please select a file');
    }
  };

  return (
    <Modal
      title="Upload Sales Invoice"
      visible={isVisible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button style={{background:"rgb(85, 188, 85)"}} key="upload" type="primary" onClick={handleUpload}>
          Upload
        </Button>,
      ]}
    >
      <Upload
        fileList={fileList}
        onChange={handleChange}
        beforeUpload={() => false} // Disable automatic upload
      >
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
    </Modal>
  );
};

export default FileUploadPopup;
