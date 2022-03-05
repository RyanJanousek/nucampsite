import React, { Component } from "react";
import { Text, ScrollView } from 'react-native'
import { Card, card } from 'react-native-elements';

class Contact extends Component {
    static navigationOptions = {
            title: 'About'
    }

    render () {
        return(
            <ScrollView>
                    <Card wrapperStyle={{margin: 20}} title="Contact Information">
                        <Text>1 Nucamp way</Text>
                        <Text>Seattle, WA 98001 U.S.A</Text>
                        <Text style={{marginBottom: 20}}>U.S.A</Text>
                        <Text>Phone: 1-206-555-1234</Text>
                        <Text>Email: campsites@nucamp.co</Text>
                    </Card>
            </ScrollView>
        )
    }
}   

export default Contact;