import { StyleSheet } from 'react-native';
export type Assignment = {
  healthCare: Categorylist[];
  stationary: Categorylist[];
  snack: Categorylist[];
  infantArticle: Categorylist[];
  Others: Categorylist[];
}

export type Categorylist = {
  category: Namelist[];
  items: Itemlist[];
}

export type Namelist = {
  name: string;
}
export type Itemlist = {
  id: string;
  code: string;
  image: string;
  name: string;
  name_tc: string;
  name_sc: string;
  name_en: string;
  description: string;
  description_tc: string;
  description_sc: string;
  description_en: string;
  limit: string;
  limit_tc: string;
  limit_sc: string;
  limit_en: string;
  weight: string;
  max_quota: string;
  item_group_id: string;
  replace:string;
}

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'ADD8E6',
  },
  detail_topic: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  detail_content: {
    color: 'black',
    fontSize:30,
  }
});