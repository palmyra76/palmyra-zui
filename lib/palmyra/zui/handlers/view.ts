const hello = {
    "queryUrl": "/api/masterdata/user/:id",
    "layout": {
        "tabs": [
            {
                "name": "tab01",
                "sections": [
                    {
                        "name": "",
                        "layoutType": "form",
                        "formLayout": {
                            "fields": [
                                {
                                    "attribute": "userName",
                                    "title": "Name",
                                    "required": true,
                                    "type": "string",
                                    "errorMessageType": "Only Alphabets are allowed",
                                    "length": {
                                        "min": 3,
                                        "max": 20,
                                        "message": "Minimum 3 chars, and maximum of 20 chars"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }
};

export {hello};