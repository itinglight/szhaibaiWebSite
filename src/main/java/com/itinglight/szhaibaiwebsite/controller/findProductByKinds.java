package com.itinglight.szhaibaiwebsite.controller;

import com.itinglight.szhaibaiwebsite.dao.ProductDao;
import com.itinglight.szhaibaiwebsite.entity.Product;
import com.itinglight.szhaibaiwebsite.utils.JsonUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/findProductByKinds")
public class findProductByKinds extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        /* 允许跨域的主机地址 */
        resp.setHeader("Access-Control-Allow-Origin", "*");
        /* 允许跨域的请求方法GET, POST, HEAD 等 */
        resp.setHeader("Access-Control-Allow-Methods", "*");
        /* 重新预检验跨域的缓存时间 (s) */
        resp.setHeader("Access-Control-Max-Age", "3600");
        /* 允许跨域的请求头 */
        resp.setHeader("Access-Control-Allow-Headers", "*");
        /* 是否携带cookie */
        resp.setHeader("Access-Control-Allow-Credentials", "true");
        String kinds = req.getParameter("kinds");

        System.out.println(kinds);

        List<Product> products = new ArrayList<Product>();
        try {
            products = ProductDao.findProductByKinds(kinds);


        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        String json=JsonUtils.getJson(products);
        resp.getWriter().write(json);

    }
}
