import React from 'react';
import Footer from './Footer';
import ContentRowtop from './ContentRowtop';
import Topbar from './Topbar';
import Additional from './Additional';

function ContentWrapper() {
    return (
    <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Topbar --> */}
                <Topbar/>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Content Row Top --> */}
                <ContentRowtop/>
            {/* <!--End Content Row Top--> */}
        </div>
        {/* <!-- End of MainContent --> */}

        {/* <!-- Additional Component --> */}
            <Additional/>
        {/* <!-- End of Additional Component --> */}

        {/* <!-- Footer --> */}
            <Footer/>
        {/* <!-- End of Footer --> */}
    </div>
    )
}

export default ContentWrapper;