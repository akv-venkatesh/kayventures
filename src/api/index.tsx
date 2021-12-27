import axios from "axios";

export const apibaseURL = axios.create({
	// baseURL: "http://kv-stage-1013818088.ap-south-1.elb.amazonaws.com",
	baseURL: "http://kv-stage-1124241965.ap-south-1.elb.amazonaws.com/",
});

export default apibaseURL;
