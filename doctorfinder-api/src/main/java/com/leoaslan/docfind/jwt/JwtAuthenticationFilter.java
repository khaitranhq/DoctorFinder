package com.leoaslan.docfind.jwt;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

@Slf4j
public class JwtAuthenticationFilter {
    @Autowired
    private JwtTokenProvider tokenProvider;


}
