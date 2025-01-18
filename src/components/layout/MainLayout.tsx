import { Layout} from "antd";
import Sidebar from "./Sidebar";


const { Header, Content } = Layout;


// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import { createElement } from "react";

// const items:MenuProps['items'] = [
//        {
//          key:'Dashboard',
//          label:'<NavLink>',
//        },
//        {
//          key:'profile',
//          label:'Profile',
//          children: [
//           {
//             key:'Create Admin',
//             label:'<NavLink>',
//           },
//           {
//             key:'Create Student',
//             label:'<NavLink>',
//           },
//          ]
//        },

// ]



const MainLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar/>
      {/* import sidebar and removing slider */}
      <Layout>
        <Header style={{ padding: 0, background: '' }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: '',
              borderRadius: '',
            }}
          >
            <h1>The main content should go here</h1>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;