export default {
    "scalars": [
        0,
        1,
        4,
        5,
        9
    ],
    "types": {
        "Void": {},
        "UUID": {},
        "Query": {
            "stories": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "Story": {
            "id": [
                1
            ],
            "priority": [
                4
            ],
            "text": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "Int": {},
        "String": {},
        "Mutation": {
            "createStory": [
                3,
                {
                    "input": [
                        7,
                        "CreateStoryInput!"
                    ]
                }
            ],
            "updateStory": [
                3,
                {
                    "input": [
                        8,
                        "UpdateStoryInput!"
                    ]
                }
            ],
            "deleteStory": [
                0,
                {
                    "id": [
                        1,
                        "UUID!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "CreateStoryInput": {
            "priority": [
                4
            ],
            "text": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "UpdateStoryInput": {
            "id": [
                1
            ],
            "priority": [
                4
            ],
            "text": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "Boolean": {}
    }
}