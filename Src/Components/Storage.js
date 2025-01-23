import AsyncStorage from '@react-native-async-storage/async-storage';
const storeData = async (key, value)=>{
    console.log('AsyncStorage:', AsyncStorage);
    try{
        await AsyncStorage.setItem(key,value);
    }catch(error){
        console.error(error);
    }

}
const getData = async (key)=>{
    try{
    const value = await AsyncStorage.getItem(key);
    return value;
    }
    catch (error){
        console.error(error);
    }
}
export { storeData, getData };