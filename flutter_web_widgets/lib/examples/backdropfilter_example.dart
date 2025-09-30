import 'dart:ui';
import 'package:flutter/material.dart';

class BackdropFilterExample extends StatelessWidget {
  const BackdropFilterExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        fit: StackFit.expand,
        children: <Widget>[
          const FlutterLogo(size: 300),
          Center(
            child: ClipRect(
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 5.0, sigmaY: 5.0),
                child: Container(
                  width: 200.0,
                  height: 200.0,
                  decoration: BoxDecoration(
                    color: Colors.grey.shade200.withOpacity(0.5),
                  ),
                  child: const Center(child: Text('Frosted Glass')),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
