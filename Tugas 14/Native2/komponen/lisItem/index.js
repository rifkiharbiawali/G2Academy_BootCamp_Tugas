import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Tombol from '../button';

export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      // url: `https://jsonplaceholder.typicode.com/albums`,
      dataSlice: [],
      pages: 1,
      // tes: 'rifki',
    };
  }
  pageP = () => {};
  next = async () => {
    let data = this.state.data;
    let page = this.state.pages;
    // for (let i = 0; i <= nilai.length; i++) {
    if (page >= 11) {
      this.setState({
        dataSlice: data.slice(90, 100),
      });
    } else {
      await this.setState({pages: page + 1});
      await this.setState({
        dataSlice: data.slice(page * 10 - 10, page * 10),
      });
    }
  };

  prev = async () => {
    let data = this.state.data;
    let page = this.state.pages;
    // for (let i = 0; i <= nilai.length; i++) {
    if (page <= 1) {
      this.setState({
        dataSlice: data.slice(0, 10),
      });
    } else {
      await this.setState({pages: page - 1});
      await this.setState({
        dataSlice: data.slice(page * 10 - 10, page * 10),
      });
    }
  };
  // shouldComponentUpdate() {}
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: json, dataSlice: json.slice(0, 10)});
      })
      .catch((
        error, //console.error(error
      ) => alert('Cek Koneksi'))
      .finally(() => {
        this.setState({isLoading: false});
      });
  }

  render() {
    const {dataSlice, isLoading} = this.state;

    return (
      <>
        {/* <ScrollView>
          <Tombol isi="Prev" press={this.prev} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Prev" press={this.prev} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Prev" press={this.prev} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Prev" press={this.prev} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Prev" press={this.prev} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Prev" press={this.prev} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
          <Tombol isi="Next" press={this.next} />
        </ScrollView> */}
        <View style={{flex: 1, padding: 24}}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={dataSlice}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => (
                <Text>
                  {item.id}, {item.title}
                </Text>
              )}
            />
          )}
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Tombol isi="Prev" press={this.prev} />
          <Tombol isi="Next" press={this.next} />
          {/* <Text>{this.state.tes}</Text> */}
        </View>
      </>
    );
  }
}
