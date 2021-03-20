import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

// FIX 1: RenderPartner in wrong location
// You wrote your renderPartner functional component right in the middle of your
// About functional component declaration. renderPartner should be totally
// separate and best placed above your About component. I'll fix it for you by
// commenting out the section of About component code here and pasting it
// with the rest of the About component code starting on line 38.
/* function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <Media tag="li" key={props.partners.id}>
                <RenderPartner partner={partner} />
            </Media>
        );
    });*/
// END FIX 1

function RenderPartner ({partner}) {
    if (partner) {
        return (
            <React.Fragment>
                <Media object src={partner.image} alt={partner.name} width="150" />
                <Media body className="ml-5 mb-4">
                    <Media heading>{partner.name}</Media>
                    {partner.description}
                </Media>
            </React.Fragment>
        )
    }
    return < div />

}

function About(props) {

    const partners = props.partners.map(partner => {
        return (
            // FIX 2: Incorrect key
            // You are correct in deciding to use the partner object's
            // id property for the key. The issue is that you are trying
            // to get it from props.partners. props.partners is an array
            // of objects and not an object itself. Insetad, use the "partner"
            // object you designate to hold each object in turn while the map method
            // traverses over the array.
            // OLD CODE: <Media tag="li" key={props.partners.id}>
            <Media tag="li" key={partner.id}>
            {
            // END FIX 2
            }
                <RenderPartner partner={partner} />
            </Media>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 3, 2016</dd>
                                <dt className="col-6">No. of Campsites in 2019</dt>
                                <dd className="col-6">563</dd>
                                <dt className="col-6">No. of Reviews in 2019</dt>
                                <dd className="col-6">4388</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">42</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.</p>
                                <footer className="blockquote-footer">Muriel Strode,{' '}
                                    <cite title="Source Title">"Wind-Wafted Wild Flowers" -
                                    The Open Court, 1903</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Community Partners</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;