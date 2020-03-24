import Axios from 'axios';

export const apiSetBookRating = async (params: any): Promise<any> => {
  const { data } = await Axios.post<any>('/v1/ratings', params);
  return data;
};

export const apiDeleteBookRating = async (params: any): Promise<any> => {
  const { ratingId } = params;
  const { data } = await Axios.delete<any>(`/v1/ratings/${ratingId}`);
  return data;
};
