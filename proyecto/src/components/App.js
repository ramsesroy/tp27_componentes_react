import '../assets/css/app.css';
import ContentWrapper from './ContentWrapper';
import Sidebar from './Sidebar';

function App() {
  return (
    <div id="wrapper">
		{/* <!-- Sidebar --> */}
      <Sidebar/>
		{/* <!-- End of Sidebar --> */}
		{/* <!-- Content Wrapper --> */}
      <ContentWrapper/>
		{/* <!-- End of Content Wrapper --> */}
	</div>
  );
}

export default App;
