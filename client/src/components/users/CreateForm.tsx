import { CreateUser,  UpdateUser } from '@/api/user';
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';
import {  useEffect } from 'react';

interface CreateFormProps {
  username: string;
  password: string;
}

interface Props {
  actionRef?: any; // 或者更具体的类型，如果已知
  userItem?: {
    id: number;
    username: string;
    password: string;
  } | null;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}
const CreateForm: React.FC<Props> = ({ actionRef, visible, setVisible,userItem }) => {
  const [form] = Form.useForm<CreateFormProps>();
  useEffect(() => {
    console.log(userItem);
    form.setFieldsValue({
     ...userItem
    });
  }, [form,visible]);
  return (
    <ModalForm<CreateFormProps>
      title="新建表单"
      trigger={
        <Button type="primary" onClick={() => setVisible(true)}>
          <PlusOutlined />
          新建表单
        </Button>
      }
      open={visible}
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      onOpenChange={setVisible}
      submitTimeout={2000}
      onFinish={async (values) => {
        const userId = userItem?.id 
        userId ?   await UpdateUser(userId,values) : await CreateUser(values) 
        message.success('提交成功');
        actionRef?.current?.reload();
        return true;
      }}
    >
      <ProFormText
        name="username"
        label="用户名"
      />
      <ProFormText
        name="password"
        label="密码"
      />
    </ModalForm>
  );
};

export default CreateForm;
