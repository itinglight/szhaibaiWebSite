package com.itinglight.szhaibaiwebsite.entity;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class Product {
    public String name;
    public String imgUrl;
    public String kinds;

    public Product() {
    }

    public Product(String name, String imgUrl, String kinds) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.kinds = kinds;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getKinds() {
        return kinds;
    }

    public void setKinds(String kinds) {
        this.kinds = kinds;
    }

    //遍历数据库结果集
    public static List<Product> getList(ResultSet rs) throws SQLException {
        List<Product> list = new ArrayList<Product>();
        while (rs.next()) {
            Product product = new Product();
            product.setName(rs.getString("name"));


            product.setImgUrl("../img/product/"+rs.getString("name")+".jpg");
            product.setKinds(rs.getString("kinds"));
            list.add(product);
            System.out.println(product);
        }
            return list;
    }

    @Override
    public String toString() {
        return "Product{" +
                "name='" + name + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                ", kinds='" + kinds + '\'' +
                '}';
    }
}
