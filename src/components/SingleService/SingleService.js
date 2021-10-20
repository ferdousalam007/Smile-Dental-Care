import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import { TiThMenu } from 'react-icons/ti';
import "./SingleService.css"

const SingleService = () => {
    let { id } = useParams();
    const [serviceDetail, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data));
    }, [])

    useEffect(() => {
        const foundService = serviceDetail.find(service => service.id === id);
        setSingleService(foundService);
    }, [serviceDetail])
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
                <article>
                    <h2 className="text-2xl font-extrabold text-gray-900">SINGLE SERVISES</h2>
                    <section className="mt-6 grid md:grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-8">
                        {
                            <Card >
                                <CardImage
                                    src={singleService?.img}
                                    alt="Card Image"
                                />
                                <img src={singleService?.icon} alt="icon" />
                                <CardBody>
                                    <H6 color="gray">{singleService?.name}</H6>
                                    <Paragraph className="font-semibold" color="gray">
                                        <p className="font-semibold" >{singleService?.subTitle}</p>
                                    </Paragraph>
                                </CardBody>
                                <CardFooter>
                                <p className="mb-5">{singleService?.description}</p>
                                <p className="mb-5">{singleService?.description1}</p>
                                <p>{singleService?.description2}</p>
                                </CardFooter>
                            </Card>
                        }

                    </section>
                </article>
            </section>
        </div>
    );
};

export default SingleService;