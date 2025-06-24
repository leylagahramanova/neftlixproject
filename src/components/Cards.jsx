import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { card } from './card';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { carddetails } from './card-details';
import { IoIosArrowForward } from "react-icons/io";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    objectFit: 'cover',
    color: "#fff",
    bgcolor: '#161616',
    boxShadow: 24,
};

const Cards = () => {
    const [open, setOpen] = React.useState(false);
    const [cards, setCards] = useState([]);
    const [selectedCardId, setSelectedCardId] = useState(null);

    const handleOpen = (cardId) => {
        setSelectedCardId(cardId);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCardId(null);
    };

    const responsiveOptions = [
        { breakpoint: '1400px', numVisible: 7, numScroll: 1 },
        { breakpoint: '1199px', numVisible: 6, numScroll: 1 },
        { breakpoint: '992px', numVisible: 5, numScroll: 1 },
        { breakpoint: '768px', numVisible: 4, numScroll: 1 },
        { breakpoint: '576px', numVisible: 2, numScroll: 1 }
    ];

    useEffect(() => {
        setCards(card.slice(0, 9));
    }, []);

    const cardTemplate = (card) => {
        return (
            <div
                className="border-1 surface-border border-round text-center"
                key={card.id}
                style={{ padding: '12.8px 16px' }}
            >
                <div onClick={() => handleOpen(card.id)}>
                    <img
                        src={card.img}
                        alt={`card-${card.id}`}
                        className=" object-cover shadow-2 rounded-2xl"
                    />
                </div>
            </div>
        );
    };

    const selectedDetail = carddetails.find((item) => item.id === selectedCardId);

    return (
        <div className=" mx-auto flex gap-2.5 flex-col items-center">
            <h2 className="text-white  font-semibold" style={{ fontSize: '1.25em', width: "100%" }}>Trending Now
            </h2>
            <Carousel
                value={cards}
                numScroll={1}
                numVisible={7} 
                orientation="horizontal"
                responsiveOptions={responsiveOptions}
                itemTemplate={cardTemplate}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="w-[667.4px] h-[584px]  rounded-t-2xl">
                    {selectedDetail && (
                        <>
                            <img src={selectedDetail.img} className="w-full h-[375.41px] object-center" />
                            <div
                                className="down h-[209.8px] w-[667.4px] bg-[#161616]"
                                style={{ padding: '1rem 2.5rem 2.5rem' }}
                            >
                                <div className="modal-text flex flex-row justify-start align-start text-white" style={{ fontSize: '0.875rem' }}>
                                    <p className="font-medium text-[0.875rem] text-white" style={{ marginRight: "1rem" }} >{selectedDetail.date}</p><span className="mx-1" style={{ marginRight: "1rem" }}>·</span>
                                    <p className="font-medium text-[0.875rem] text-white" style={{ marginRight: "1rem" }}>{selectedDetail.rating}</p><span className="mx-1" style={{ marginRight: "1rem" }}>·</span>
                                    <p className="font-medium text-[0.875rem] text-white" style={{ marginRight: "1rem" }}>{selectedDetail.theme}</p><span className="mx-1" style={{ marginRight: "1rem" }}>·</span>
                                    {selectedDetail.genre.map((g, index) => (
                                        <p
                                            key={index}
                                            className="font-medium text-[0.875rem] text-white"
                                            style={{ marginRight: '1rem', display: 'inline' }}
                                        >
                                            {g}{index !== selectedDetail.genre.length - 1 && <span className="mx-1" style={{ marginRight: "1rem" }}>·</span>}
                                        </p>
                                    ))}
                                </div>
                                <div className="modal-description" style={{ paddingTop: '1rem' }}>

                                    <p>{selectedDetail.description}</p>
                                    <div className=' flex justify-center align-center flex-wrap gap-2.5 py-6 ' style={{ paddingTop: '1rem' }}>
                                        <input type="text" placeholder='Email address' className='text-xl   py-6 px-5 rounded-4xl bg-gray-700  h-14 w-80' />
                                        <button className='bg-red-700 rounded-4xl text-white h-14 w-56 text-xl  flex justify-center items-center flex-row'>Get Startted <IoIosArrowForward /></button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default Cards;
