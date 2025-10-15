package com.example.demo.rest;

import org.springframework.web.bind.annotation.RestController;

import lombok.Getter;
import lombok.Setter;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
public class AppRestController {
    
    @ResponseBody
    @GetMapping("/api/welcome")
    public InnerAppRestController welcome() {
        return new InnerAppRestController("Welcome to my Angular-Spring App!");
    }

    @Getter
    @Setter
    public class InnerAppRestController {
        String msg;

        public InnerAppRestController(String msg) {
            this.msg = msg;
        }
    }

}
