package com.itinglight.szhaibaiwebsite.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itinglight.szhaibaiwebsite.entity.Product;
public class JsonUtils {
    public static String getJson(Object object) throws JsonProcessingException {
        //创建一个jackson的对象映射器，用来解析数据
        ObjectMapper mapper = new ObjectMapper();

        //将我们的对象解析成为json格式
        String json = mapper.writeValueAsString(object);
        //由于@ResponseBody注解，这里会将str转成json格式返回；十分方便
        return json;
    }

}
