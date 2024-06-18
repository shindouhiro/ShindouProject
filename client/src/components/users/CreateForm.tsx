import { CreateUser } from '@/api/user';
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';

interface CreateFormProps {
  username: string;
  password: string;
}

interface Props {
  actionRef?: any; // 或者更具体的类型，如果已知
  username?: string;
  password?: string;
}
const CreateForm: React.FC<Props> = ({actionRef}) => {
  const [form] = Form.useForm<CreateFormProps>();
  return (
    <ModalForm<CreateFormProps>
      title="新建表单"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          新建表单
        </Button>
      }
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        await CreateUser(values)
        message.success('提交成功');
        actionRef?.current?.reload();
        return true;
      }}
    >
      <ProFormText
        name="username"
        label="用户名"
        initialValue="xxxx项目"
      />
      <ProFormText
        name="password"
        label="密码"
        initialValue="启途"
      />
    </ModalForm>
  );
};

export default CreateForm;
