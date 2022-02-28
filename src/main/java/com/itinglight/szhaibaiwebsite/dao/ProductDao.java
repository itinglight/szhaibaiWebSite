package com.itinglight.szhaibaiwebsite.dao;

import com.itinglight.szhaibaiwebsite.entity.Product;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ProductDao {
    private static Connection conn;
    static{
        //注册驱动
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            //获取连接
            conn = DriverManager.getConnection("jdbc:mysql://47.94.154.2:3306/szhaibai?useUnicode=true&characterEncoding=utf-8", "itinglight", "123");

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public static List<Product> findProductByKinds(String kinds) throws ClassNotFoundException, SQLException {
        //注册驱动
        Class.forName("com.mysql.cj.jdbc.Driver");
        //获取连接
        conn = DriverManager.getConnection("jdbc:mysql://47.94.154.2:3306/szhaibai?useUnicode=true&characterEncoding=utf-8", "itinglight", "123");


        //获取执行sql语句的对象
        java.sql.Statement stmt = conn.createStatement();
        //执行sql语句
        String sql = "select * from products where kinds = '" + kinds + "'";
        System.out.println(sql);

        java.sql.ResultSet rs = stmt.executeQuery(sql);
        //遍历结果集
        List<Product> list =new ArrayList<Product>();
        list=Product.getList(rs);
        //关闭资源
        rs.close();
        stmt.close();
        conn.close();
        return list;
    }

    // 根据名字查找商品
    public static List<Product> findProductByName(String productName) throws SQLException {
        List<Product> list =new ArrayList<Product>();
        String sql = "select * from products where name like ?";
        PreparedStatement preparedStatement = conn.prepareStatement(sql);
        preparedStatement.setString(1, "%"+productName+"%");
        java.sql.ResultSet rs = preparedStatement.executeQuery();
        list=Product.getList(rs);
        return list;
    }
}
