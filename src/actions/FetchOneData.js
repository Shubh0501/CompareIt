import { FETCH_ONE_DATA } from './types';
import DatabaseApi from '../api/DatabaseApi'

export const fetchOneData = (text, searchNumber) => {
    return async (dispatch) => {
        try {
            //const response = await DatabaseApi.get(`/cameras/${text}`);
            dispatch({
                type: FETCH_ONE_DATA,
                //payload: response.data
                payload: {
                    camera: {
                        general: {
                            name: 'Sony Alpha 1 (ILCE-1)',
                            brand: 'Sony',
                            launchedDate: '03/01/2021',
                            cameraModel: 'α1, ILCE-1',
                            cameraType: 'Mirrorless Camera',
                            imageSensorType: 'BSI-CMOS',
                            imageSensorSize: '35mm Full Frame (35.6 x 24 mm) Exmor R CMOS sensor',
                            effectivePixels: 'Approx. 50.1 megapixels',
                            totalPixels: 'Approx. 50.5 megapixels',
                            maxResolution: '8640 x 5760 pixels',
                            aspectRatio: '3:2'
                        },
                        sensor: {
                            ISORating: 'ISO 100–32000 equivalent, AUTO (ISO 100–12800, selectable lower limit and upper limit)',
                            whiteBalancePresets: '7',
                            customWhiteBalance: 'Yes',
                            autofocusPoint: '759',
                            processor: 'Dual Bionz XR',
                            minimumShutterSpeed: '30sec',
                            maximumShutterSpeed: '1/8000 sec'
                        },
                        shutter: {
                            shutterType: 'Electronically controlled, vertical-traverse, focal-plane (Mechanical shutter/Electronic shutter)',
                            continuousShooting: '30fps'
                        },
                        lens: {
                            lensMount: 'Sony E-mount',
                            compatibleLenses: 'Sony E-mount Lenses',
                            focalLength: ''
                        },
                        viewfinder: {
                            type: '1.6 cm (0.64 type) electronic viewfinder (color)',
                            coverage: '',
                            magnification: 'Approx. 0.90 x (with 50-mm lens at infinity, –1 m-₁)',
                            eyepoint: 'Approx. 25 mm from the eyepiece lens, 21 mm from the eyepiece frame at –1 m-₁ (CIPA standard)',
                            diopricAdjustment: '–4.0 to +3.0 m-₁'
                        },
                        display: {
                            size: '3 inch',
                            type: 'TFT Colour (Tilting Monitor)',
                            touchscreen: 'Yes',
                            screenDots: '14,40,000 dots'
                        },
                        flash: {
                            builtInFlash: 'No',
                            externalFlash: 'Yes (via Hot Shoe)'
                        },
                        power: {
                            batteryModel: 'NP-FZ100',
                            batteryType: 'Rechargeable Li-ion',
                            batteryLife: 'Approx. 430 shots (Viewfinder) / approx. 530 shots (LCD monitor)',
                            batteryLifeForVideo: 'Approx. 145 min'
                        },
                        connectivity: {
                            wifi: 'Yes,  IEEE 802.11a/b/g/n/ac [2.4-GHz band/5-GHz band]',
                            bluetooth: 'Yes. v.5.0',
                            hdmi: 'Yes, Mini HDMI',
                            usb: 'Yes',
                            remoteControl: 'Yes'
                        },
                        storage: {
                            memoryCardType: 'SD memory card, SDHC memory card (UHS-I/II-compliant), SDXC memory card (UHS-I/II-compliant), CFexpress Type A memory card',
                            videoFormat: 'XAVC S: MPEG-4 AVC/H.264, XAVC HS: MPEG-H HEVC/H.265/ 4K video recording',
                            imageFormat: 'JPEG, RAW'
                        },
                        body: {
                            dimension: '128.9 mm x 96.9 mm x 69.7 mm',
                            weight: '737g with batteries',
                            bodyConstruction: 'Magnesium Alloy',
                            durability: 'Dust & Moisture Resistant',
                            colors: 'Black'
                        },
                        audio: {
                            microphone: 'Built-in, stereo',
                            speaker: 'Built-in, monaural'
                        }
                    },
                    searchNumber: searchNumber
                }
            });
        } catch (error) {
            if(error.response){
                dispatch({
                    type: FETCH_ONE_DATA,
                    payload: {
                        error: error.response.data.error,
                        searchNumber: searchNumber
                    }
                });
            }
            else{
                dispatch({
                    type: FETCH_ONE_DATA,
                    payload: 
                    {
                        error: error.message,
                        searchNumber: searchNumber
                    }
                });
            }
        }
    }
}