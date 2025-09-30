import 'package:flutter/material.dart';

class ContainerExample extends StatelessWidget {
  const ContainerExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        width: 200.0,
        height: 200.0,
        color: Colors.blue,
        alignment: Alignment.center,
        child: const Text(
          'Hello Container',
          style: TextStyle(color: Colors.white),
        ),
      ),
    );
  }
}
