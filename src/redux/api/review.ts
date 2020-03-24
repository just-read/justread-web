import Axios from 'axios';

export const apiAddBookReview = async (params: any): Promise<any> => {
  const { data } = await Axios.post<any>('/v1/reviews', params);
  return data;
};

export const apiModifyBookReview = async (params: any): Promise<any> => {
  const { reviewId, ...otherParams } = params;
  const { data } = await Axios.post<any>(`/v1/reviews/${reviewId}`, otherParams);
  return data;
};

export const apiRemoveBookReview = async (params: any): Promise<any> => {
  const { reviewId } = params;
  const { data } = await Axios.post<any>(`/v1/reviews/${reviewId}`, params);
  return data;
};
