package com.itinglight.szhaibaiwebsite.controller;

import com.itinglight.szhaibaiwebsite.entity.Product;
import com.itinglight.szhaibaiwebsite.utils.JsonUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/allproducts")
public class allproducts extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {

        response.setCharacterEncoding("UTF-8");
        String json ="";
        //创建一个对象

        Product product1 = new Product("工业酒精", "../img/工业酒精.jpg", "醇类");
        Product product2 = new Product("工业酒精", "../img/工业酒精.jpg", "醇类");
//        List<Product> products = new ArrayList<>(3);
        //定义Product集合
        List<Product> products = new ArrayList<Product>();
        products.add(product1);
        products.add(product2);
        json = JsonUtils.getJson(products);
        System.out.println(json);
        response.getWriter().write(json);
    }
}
