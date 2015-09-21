/**
 * Created by owner on 9/20/15.
 */
var app = angular.module('myApp',[]);
app.controller('mainCtrl', function($scope) {

    $scope.contents = [
        {
            nav: {
                class: 'com__nav-link centered',
                thumbs: [
                    {class: 'blue-line animate scaleIn delay-3'},
                    {class: 'white-circle animate scaleIn delay-5'}
                ]
            },
            content_class: 'com__section com__section--text centered',
            title: {
                class: 'animate scaleIn',
                content: 'kfir zuberi'
            },
            image: {
                class: 'animate scaleIn delay-3',
                src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg'
            }
        },
        {
            nav: {
                class: 'com__nav-link',
                thumbs: [
                    {class: 'blue-line animate scaleInLeft delay-2'},
                    {class: 'white-line animate scaleInLeft delay-4'},
                    {class: 'white-line animate scaleInLeft delay-5'},
                ]
            },
            content_class: 'com__section com__section--text',
            title: {
                class: 'animate slideInLeft',
                content: 'animate slideInLeft header'
            },
            content: {
                class: 'animate slideInLeft delay-3',
                content: 'some content'
            },
        },
        {
            nav: {
                class: 'com__nav-link flex-row',
                sideA: {
                    thumbs: [
                        {class: 'blue-line animate scaleInLeft delay-3'},
                        {class: 'white-line animate scaleInLeft delay-4'}
                    ]
                },
                sideB: {
                    thumbs: [
                        {class: 'white-circle animate slideInRight delay-5'},
                    ]
                },
            },
            content_class: 'com__section com__section--text com__section--text-img',
            isHalf: true,
            content: {
                sideA: {
                    title: {
                        class: 'animate slideInLeft',
                        content: 'animate slideInLeft header'
                    },
                    content: {
                        class: 'animate slideInLeft delay-2',
                        content: 'some content'
                    }
                },
                sideB: {
                    image: {
                        class: 'animate scaleIn delay-3',
                        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg'
                    }
                },
            },
        },
        {
            nav: {
                class: 'com__nav-link centered',
                thumbs: [
                    {class: 'blue-line animate scaleIn delay-3'},
                    {class: 'white-circle animate scaleIn delay-5'}
                ]
            },
            content_class: 'com__section com__section--text centered',
            title: {
                class: 'animate scaleIn',
                content: 'Communication Design'
            },
            image: {
                class: 'animate scaleIn delay-3',
                src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg'
            }
        },
        {
            nav: {
                class: 'com__nav-link',
                thumbs: [
                    {class: 'blue-line animate scaleInLeft delay-2'},
                    {class: 'white-line animate scaleInLeft delay-4'},
                    {class: 'white-line animate scaleInLeft delay-5'},
                ]
            }, content_class: 'com__section com__section--text',
            title: {
                class: 'animate slideInLeft',
                content: 'Header'
            },
            content: {
                class: 'animate slideInLeft delay-3',
                content: 'some content...'
            },
        },
        {
            nav: {
                class: 'com__nav-link flex-row',
                sideA: {
                    thumbs: [
                        {class: 'blue-line animate scaleInLeft delay-3'},
                        {class: 'white-line animate scaleInLeft delay-4'}
                    ]
                },
                sideB: {
                    thumbs: [
                        {class: 'white-circle animate slideInRight delay-5'},
                    ]
                },
            }, content_class: 'com__section com__section--text com__section--text-img',
            isHalf: true,
            content: {
                sideA: {
                    title: {
                        class: 'animate slideInLeft',
                        content: 'animate slideInLeft header'
                    },
                    content: {
                        class: 'animate slideInLeft delay-2',
                        content: 'some content'
                    }
                },
                sideB: {
                    image: {
                        class: 'animate slideInRight delay-3',
                        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg'
                    }
                },
            },
        },
        {
            nav: {
                class: 'com__nav-link',
                thumbs: [
                    {class: 'blue-line animate scaleInLeft delay-2'},
                    {class: 'white-line animate scaleInLeft delay-4'},
                    {class: 'white-line animate scaleInLeft delay-5'},
                ]
            }, content_class: 'com__section com__section--text',
            title: {
                class: 'animate slideInLeft',
                content: 'Header'
            },
            content: {
                class: 'animate slideInLeft delay-3',
                content: 'some content...'
            },
        }
    ];
});