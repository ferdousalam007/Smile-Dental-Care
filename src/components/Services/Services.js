import React, { useEffect, useState } from 'react';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
                <article>
                    <h2 className="text-4xl font-extrabold text-gray-900 text-center py-4 mb-12">OUR SERVISES</h2>
                    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                        {
                            services.map(service => <Card className="mb-6" key={service.id}>
                                <CardImage
                                    src={service.img}
                                    alt="Card Image"
                                />
                                <img src={service.icon} alt="icon" />
                                <CardBody>
                                    <H6 color="gray">{service.name}</H6>
                                    <Paragraph color="gray">
                                        {service.subTitle.slice(0, 120)}...
                                    </Paragraph>
                                </CardBody>

                                <CardFooter>
                                    <Link to={`/services/${service?.id}`}>
                                        <Button color="lightGreen" size="lg" ripple="light">
                                            Read More
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>)
                        }
                       
                    </section>
                </article>
            </section>
            
        </div>
    );
};

export default Services;