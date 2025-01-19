import { Button, Layout} from "antd";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { Outlet } from "react-router-dom";


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
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar/>
      {/* import sidebar and removing slider */}
      <Layout>
      <Header>
          <Button onClick={handleLogout}>Logout</Button>{' '}
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: '',
              borderRadius: '',
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;