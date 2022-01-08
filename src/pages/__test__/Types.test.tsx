import Types from '../Types';

import { getByRole, render, screen, fireEvent } from '@testing-library/react';
import { testStore } from "./testStore";
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../../store/store';
import { Provider } from 'react-redux';
import { type } from 'os';

let data = {
    "business_category": [
        {
            "id": 15,
            "name": "Parent of taha",
            "description": null,
            "imageUrl": null,
            "imageDetails": null,
            "parentId": 2,
            "hierarchyLevel": 1,
            "createdAt": "2022-01-05T11:40:27.793Z",
            "updatedAt": "2022-01-05T11:40:27.793Z"
        },
        {
            "id": 8,
            "name": "Parent of Woven",
            "description": null,
            "imageUrl": null,
            "imageDetails": null,
            "parentId": 2,
            "hierarchyLevel": 1,
            "createdAt": "2021-12-30T14:25:56.089Z",
            "updatedAt": "2021-12-30T14:25:56.089Z"
        },
        {
            "id": 16,
            "name": "Parent of satya",
            "description": null,
            "imageUrl": null,
            "imageDetails": null,
            "parentId": 2,
            "hierarchyLevel": 1,
            "createdAt": "2022-01-05T12:26:32.477Z",
            "updatedAt": "2022-01-05T12:26:32.477Z"
        },
        {
            "id": 20,
            "name": "Parent of emproto",
            "description": null,
            "imageUrl": null,
            "imageDetails": null,
            "parentId": 2,
            "hierarchyLevel": 1,
            "createdAt": "2022-01-05T12:32:15.988Z",
            "updatedAt": "2022-01-05T12:32:15.988Z"
        },
        {
            "id": 2,
            "name": "Buyer",
            "description": "Apparel, Fabric, Yarn, Fibre",
            "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
            "imageDetails": {
                "key": "s3-buyer-key",
                "name": "buyer.jpeg",
                "value": {
                    "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                    "size": "1MB",
                    "width": "100px",
                    "height": "100px",
                    "imageType": "jpeg"
                }
            },
            "parentId": null,
            "hierarchyLevel": 1,
            "createdAt": "2021-12-27T07:05:10.892Z",
            "updatedAt": "2022-01-05T12:31:27.976Z"
        },
        {
            "id": 1,
            "name": "Manufacturer",
            "description": "Apparel, Fabric, Yarn, Fibre",
            "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
            "imageDetails": {
                "key": "s3-manufacturer-key",
                "name": "manufacturer.jpeg",
                "value": {
                    "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                    "size": "1MB",
                    "width": "100px",
                    "height": "100px",
                    "imageType": "jpeg"
                }
            },
            "parentId": 20,
            "hierarchyLevel": 1,
            "createdAt": "2021-12-27T07:04:52.597Z",
            "updatedAt": "2022-01-05T12:32:15.991Z",
            "children": [
                {
                    "id": 3,
                    "name": "Fabric",
                    "description": "Apparel, Fabric, Yarn, Fibre",
                    "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                    "imageDetails": {
                        "key": "s3-buyer-key",
                        "name": "buyer.jpeg",
                        "value": {
                            "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                            "size": "1MB",
                            "width": "100px",
                            "height": "100px",
                            "imageType": "jpeg"
                        }
                    },
                    "parentId": 1,
                    "hierarchyLevel": 2,
                    "createdAt": "2021-12-27T07:05:23.052Z",
                    "updatedAt": "2021-12-27T07:05:23.052Z"
                },
                {
                    "id": 4,
                    "name": "Yarn",
                    "description": "Apparel, Fabric, Yarn, Fibre",
                    "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                    "imageDetails": {
                        "key": "s3-buyer-key",
                        "name": "buyer.jpeg",
                        "value": {
                            "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                            "size": "1MB",
                            "width": "100px",
                            "height": "100px",
                            "imageType": "jpeg"
                        }
                    },
                    "parentId": 1,
                    "hierarchyLevel": 2,
                    "createdAt": "2021-12-27T07:05:29.896Z",
                    "updatedAt": "2021-12-27T07:05:29.896Z"
                },
                {
                    "id": 5,
                    "name": "Fibre",
                    "description": "Apparel, Fabric, Yarn, Fibre",
                    "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                    "imageDetails": {
                        "key": "s3-buyer-key",
                        "name": "buyer.jpeg",
                        "value": {
                            "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                            "size": "1MB",
                            "width": "100px",
                            "height": "100px",
                            "imageType": "jpeg"
                        }
                    },
                    "parentId": 1,
                    "hierarchyLevel": 2,
                    "createdAt": "2021-12-27T07:05:34.328Z",
                    "updatedAt": "2021-12-27T07:05:34.328Z"
                },
                {
                    "id": 7,
                    "name": "Manuasest",
                    "description": "Apparel, Fabric, Yarn, Fibre",
                    "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                    "imageDetails": {
                        "key": "s3-manufacturer-key",
                        "name": "manufacturer.jpeg",
                        "value": {
                            "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                            "size": "1MB",
                            "width": "100px",
                            "height": "100px",
                            "imageType": "jpeg"
                        }
                    },
                    "parentId": 1,
                    "hierarchyLevel": 2,
                    "createdAt": "2021-12-30T14:07:01.872Z",
                    "updatedAt": "2021-12-30T14:22:12.299Z"
                },
                {
                    "id": 10,
                    "name": "mechanical",
                    "description": "Apparel, Fabric, Yarn, Fibre",
                    "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                    "imageDetails": {
                        "key": "s3-manufacturer-key",
                        "name": "manufacturer.jpeg",
                        "value": {
                            "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                            "size": "1MB",
                            "width": "100px",
                            "height": "100px",
                            "imageType": "jpeg"
                        }
                    },
                    "parentId": 1,
                    "hierarchyLevel": 2,
                    "createdAt": "2022-01-05T09:22:03.296Z",
                    "updatedAt": "2022-01-05T09:22:03.296Z"
                },
                {
                    "id": 22,
                    "name": "Mechanical",
                    "description": "Apparel, Fabric, Yarn, Fibre",
                    "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                    "imageDetails": {
                        "key": "s3-manufacturer-key",
                        "name": "manufacturer.jpeg",
                        "value": {
                            "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                            "size": "1MB",
                            "width": "100px",
                            "height": "100px",
                            "imageType": "jpeg"
                        }
                    },
                    "parentId": 1,
                    "hierarchyLevel": 2,
                    "createdAt": "2022-01-05T12:46:38.834Z",
                    "updatedAt": "2022-01-05T12:46:38.834Z"
                },
                {
                    "id": 23,
                    "name": "10009",
                    "description": "Apparel, Fabric, Yarn, Fibre",
                    "imageUrl": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                    "imageDetails": {
                        "key": "s3-manufacturer-key",
                        "name": "manufacturer.jpeg",
                        "value": {
                            "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595",
                            "size": "1MB",
                            "width": "100px",
                            "height": "100px",
                            "imageType": "jpeg"
                        }
                    },
                    "parentId": 1,
                    "hierarchyLevel": 2,
                    "createdAt": "2022-01-05T12:46:58.692Z",
                    "updatedAt": "2022-01-05T12:46:58.692Z"
                }
            ]
        }
    ],
    "category": "",
    "response": null,
    "business_category_single": "1",
    "primary_details_status": false,
    "primary_details_error": false,
    "primary_details_error_message": "",
    "Types": [],
    "primary_designation": ""
}
let wrapper:any;
beforeAll(() => {
    localStorage.setItem('business_category', JSON.stringify(data));

    wrapper = render( <Router>
        <Provider store={store}>
            <Types />
        </Provider>
    </Router>
    );
});



test('initial test types', () => {
    const type1 = wrapper.getByTestId('test0');
    const type2 = wrapper.getByTestId('test1');
    const type3 = wrapper.getByTestId('test2');
    const nextbuttondisable = wrapper.getByTestId('disablenextbutton');
    const backbutton = wrapper.getByTestId('backbutton');

    expect(type1).toBeInTheDocument;
    expect(type2).toBeInTheDocument;
    expect(type3).toBeInTheDocument;
    expect(nextbuttondisable).toBeInTheDocument;
    expect(backbutton).toBeInTheDocument;

    fireEvent.click(type1);
    expect(type1).toBeChecked();
    expect(type2).not.toBeChecked();
    expect(type3).not.toBeChecked();
    expect(nextbuttondisable).not.toBeInTheDocument;
    expect(wrapper.getByTestId('nextbutton')).toBeInTheDocument;


    fireEvent.click(type2);
    expect(type1).toBeChecked();
    expect(type2).toBeChecked();
    expect(type3).not.toBeChecked();


    fireEvent.click(type3);
    expect(type1).toBeChecked();
    expect(type2).toBeChecked();
    expect(type3).toBeChecked();

})